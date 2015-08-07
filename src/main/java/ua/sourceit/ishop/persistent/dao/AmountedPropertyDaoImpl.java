package ua.sourceit.ishop.persistent.dao;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.model.prop.AmountedProperty;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;

import javax.inject.Inject;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

/**
 * @author: areznik
 */
@Repository
public class AmountedPropertyDaoImpl implements AmountedPropertyDao {

    public static final String GET_GENDER_AMOUNT_SQL = "select id_gender, name, amount from gender order by id_gender";
    public static final String GET_MOVEMENT_AMOUNT_SQL = "select id_movement, name, amount from movement order by id_movement";
    public static final String GET_PRICE_GROUP_AMOUNT_SQL = "select id_price_group, name, amount from price_group order by id_price_group";
    public static final String GET_BRAND_SQL = "select id_brand, name, 0 as amount from brand order by id_brand";



    private  DataSource dataSource;

    @Inject
    public AmountedPropertyDaoImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }


    @Override
    public List<AmountedProperty> getGendersAmount() throws DaoSystemException {
        return doGetProperties(GET_GENDER_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getMovementAmount() throws DaoSystemException {
        return doGetProperties(GET_MOVEMENT_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getPriceGroupAmount() throws DaoSystemException {
        return doGetProperties(GET_PRICE_GROUP_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getBrandAmount() throws DaoSystemException {
        return doGetProperties(GET_BRAND_SQL);
    }

    private List<AmountedProperty> doGetProperties(String sqlText)throws DaoSystemException{

        List<AmountedProperty> properties = new LinkedList<>();
        try{
            try (Connection connection   = dataSource.getConnection();
                PreparedStatement preparedStatement = connection.prepareStatement(sqlText)){
                ResultSet rs = preparedStatement.executeQuery();
                while (rs.next()) {
                    AmountedProperty amountedProperty = new AmountedProperty(rs.getInt(1),rs.getString(2),rs.getInt(3));
                    properties.add(amountedProperty);
                }

            };

        }catch (SQLException ex){
            throw new DaoSystemException(ex.getMessage(),ex);
        }

        return properties;
    }



}
