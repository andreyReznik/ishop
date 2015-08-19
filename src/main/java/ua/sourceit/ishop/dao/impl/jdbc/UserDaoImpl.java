package ua.sourceit.ishop.dao.impl.jdbc;

import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;

/**
 * @author: areznik
 */


public class UserDaoImpl extends AbstractJdbcDao implements UserDao {

    private static final String GET_USER_ID_BY_LOGIN_SQL = "SELECT id_user from user where login = ?";

    private static final String CREATE_USER_SQL = "insert into user(name, login, pass, email, phone, role, "+
            " created, active )" +
            " values (?,?,?,?,?,?,?,?)";


    @Override
    public User getById(int userId) {
          return User.createFakeUser();
//        Integer id = null;
//        try{
//            id = getJdbcTemplate().queryForObject(GET_USER_ID_BY_LOGIN_SQL,
//                    Integer.class,user.getLogin());
//        }catch (EmptyResultDataAccessException ex){
//           //No data
//        }
//        if (id != null) {
//            user.setId(id);
//            return user;
//        }
//
//        KeyHolder keyHolder = new GeneratedKeyHolder();
//        getJdbcTemplate().update(
//                new PreparedStatementCreator() {
//                    public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
//                        PreparedStatement preparedStatement =
//                                connection.prepareStatement(CREATE_USER_SQL, new String[]{"id"});
//                        preparedStatement.setString(1, user.getName());
//                        preparedStatement.setString(2, user.getLogin());
//                        preparedStatement.setString(3, user.getPass());
//                        preparedStatement.setString(4, user.getEmail());
//                        preparedStatement.setString(5, user.getPhone());
//                        preparedStatement.setInt(6, user.getRole().getId());
//                        preparedStatement.setTimestamp(7, new Timestamp(new Date().getTime()));
//                        preparedStatement.setBoolean(8, true);
//                        return preparedStatement;
//                    }
//                },
//                keyHolder);
//        user.setId(keyHolder.getKey().intValue());
//        return user;
    }
}
