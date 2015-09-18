package ua.sourceit.ishop.core.service.impl;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.component.PasswordGenerator;
import ua.sourceit.ishop.core.dao.UserDao;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserDto;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */

public class UserServiceImplTest {

    private UserDao userDaoMock;

    private UserServiceImpl userService;

    private PasswordGenerator passwordGenerator;

    private static final String PASS = "593876d5-fb6d-4822-b336-c8810f68776e";
    private static final String EMAIL = "test@test.ru";
    private static final String USER_NAME = "UserName";

    @Before
    public void initMocks() throws Exception{
        userDaoMock = mock(UserDao.class);
        passwordGenerator = mock(PasswordGenerator.class);
        when(passwordGenerator.GenerateUUID()).thenReturn(PASS);

        userService = new UserServiceImpl();

        ReflectionTestUtils.setField(userService, "userDao", userDaoMock);
        ReflectionTestUtils.setField(userService, "passwordGenerator", passwordGenerator);
    }



    @Test
    public void testAuthenticateFromFBWhenUserExists() throws Exception {

        User iShopUser = new User();
        iShopUser.setId(4);
        iShopUser.setEmail(EMAIL);
        when(userDaoMock.findByEmail(EMAIL)).thenReturn(iShopUser);
        com.restfb.types.User fbUser = new com.restfb.types.User();
        fbUser.setEmail(EMAIL);

        User returnedUser = userService.authenticateFromFB(fbUser);

        verify(userDaoMock,times(1)).findByEmail(EMAIL);
        assertEquals(iShopUser, returnedUser);
    }

    @Test
    public void testAuthenticateFromFBWhenUserDoesNotExist() throws Exception {

        User iShopUser = User.createWithUserRole(USER_NAME,EMAIL,PASS);
        when(userDaoMock.findByEmail(anyString())).thenReturn(null);
        com.restfb.types.User fbUser = new com.restfb.types.User();
        fbUser.setEmail(EMAIL);
        fbUser.setName(USER_NAME);

        User returnedUser = userService.authenticateFromFB(fbUser);

        verify(userDaoMock,times(1)).save(iShopUser);
        assertEquals(iShopUser,returnedUser);
    }


    @Test
    public void testRegisterNewUserWhenUserExists() throws Exception {
        when(userDaoMock.findByEmail(EMAIL)).thenReturn(new User());
        UserDto userDto = new UserDto();
        userDto.setEmail(EMAIL);
        try{
            userService.registerNewUser(userDto);

            fail("UserWithThisEmailAlreadyExists must be thrown!");
        }catch (UserWithThisEmailAlreadyExists ex){
            verify(userDaoMock,times(1)).findByEmail(EMAIL);
            assertEquals(ex.getMessage(),userService.USER_EXISTS_ERROR_TEXT);
        }
    }

    @Test
    public void testRegisterNewUserWhenUserDoesNotExist() throws Exception {
        User createdUser = User.createWithUserRole(USER_NAME, EMAIL, PASS);
        when(userDaoMock.findByEmail(EMAIL)).thenReturn(null);
        UserDto userDto = new UserDto();
        userDto.setEmail(EMAIL);
        userDto.setFirstName(USER_NAME);
        userDto.setPassword(PASS);

        User registeredUser = userService.registerNewUser(userDto);

        verify(userDaoMock,times(1)).findByEmail(EMAIL);
        verify(userDaoMock,times(1)).save(createdUser);
        assertEquals(registeredUser, createdUser);
    }

    @Test
    public void testGetById() throws Exception {
        userService.getById(2);
        verify(userDaoMock, times(1)).getById(2);
    }

}
