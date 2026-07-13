import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private List<Country> countries = Arrays.asList(

            new Country("IN", "India"),
            new Country("US", "United States"),
            new Country("DE", "Germany"),
            new Country("JP", "Japan")

    );

    public Country getCountry(String code) {

        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

    }

}