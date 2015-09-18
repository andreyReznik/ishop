package ua.sourceit.ishop.core.component;

import org.springframework.stereotype.Component;

import java.util.UUID;

/**
 * Password generator
 * @author: areznik
 */

@Component("passwordGenerator")
public class PasswordGenerator {

    public String GenerateUUID(){
       return UUID.randomUUID().toString();
    }
}
