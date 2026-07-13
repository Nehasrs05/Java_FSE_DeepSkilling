import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public String authenticate() {

        String token = JwtUtil.generateToken("user");

        return "{\"token\":\"" + token + "\"}";
    }

}