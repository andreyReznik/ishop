package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.jdbc.core.RowMapper;
import ua.sourceit.ishop.dao.AmountedPropertyDao;
import ua.sourceit.ishop.model.AmountedProperty;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * @author: areznik
 */

public class AmountedPropertyDaoImpl extends AbstractJdbcDao implements AmountedPropertyDao, RowMapper<AmountedProperty> {

    public static final String GET_GENDER_AMOUNT_SQL = "select id_gender, name, amount from gender order by id_gender";
    public static final String GET_MOVEMENT_AMOUNT_SQL = "select id_movement, name, amount from movement order by id_movement";
    public static final String GET_PRICE_GROUP_AMOUNT_SQL = "select id_price_group, name, amount from price_group order by id_price_group";
    public static final String GET_BRAND_SQL = "select id_brand, name, 0 as amount from brand order by id_brand";


    @Override
    public List<AmountedProperty> getGendersAmount() {
        return doGetProperties(GET_GENDER_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getMovementAmount() {
        return doGetProperties(GET_MOVEMENT_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getPriceGroupAmount() {
        return doGetProperties(GET_PRICE_GROUP_AMOUNT_SQL);
    }

    @Override
    public List<AmountedProperty> getBrandAmount() {
        return doGetProperties(GET_BRAND_SQL);
    }

    private List<AmountedProperty> doGetProperties(String sqlText) {
        return getJdbcTemplate().query(sqlText, this);
    }


    @Override
    public AmountedProperty mapRow(ResultSet rs, int rowNum) throws SQLException {
       final int id = rs.getInt(1);
       final String name = rs.getString(2);
       final int amount =   rs.getInt(3);
        return new AmountedProperty() {
            @Override
            public int getId() {
              return  id;
            }

            @Override
            public int getAmount() {
                return amount;
            }

            @Override
            public String getName() {
                return name;
            }
        };
    }
}
