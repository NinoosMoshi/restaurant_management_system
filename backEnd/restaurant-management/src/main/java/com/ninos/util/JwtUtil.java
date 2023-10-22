package com.ninos.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

      public String generateToken(UserDetails userDetails){
          return generateToken(new HashMap<>(), userDetails);
      }


      private String generateToken(Map<String, Object> extraClaims, UserDetails userDetails){
          return Jwts.builder().setClaims(extraClaims).setSubject(userDetails.getUsername())
                  .setIssuedAt(new Date(System.currentTimeMillis()))
                  .setExpiration(new Date(System.currentTimeMillis() + 10000 * 60 * 24))
                  .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
      }


      private Key getSigningKey(){
          byte[] keyBytes = Decoders.BASE64.decode("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssseeeeeeeeeeeeeeeeeeeeeeeeeeeeeessssssssssssssssssssssssssssssssssssssssssssssssssrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrcccccccccccccccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
          return Keys.hmacShaKeyFor(keyBytes);
      }


      public String extractUserName(String token){
          return extractClaim(token, Claims::getSubject);
      }


      public boolean isTokenValid(String token, UserDetails userDetails){
          final String userName = extractUserName(token);
          return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token));
      }


      private boolean isTokenExpired(String token){
          return extractExpiration(token).before(new Date());
      }


      private <T> T extractClaim(String token, Function<Claims, T> claimsResolvers){
          final Claims claims = extractAllClaims(token);
          return claimsResolvers.apply(claims);
      }


      private Date extractExpiration(String token){
          return extractClaim(token, Claims::getExpiration);
      }


      private Claims extractAllClaims(String token){
          return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token)
                  .getBody();
      }





//    public String generateToken(String email){
//        Map<String, Object> claims = new HashMap<>();
//        return createToken(claims, email);
//    }

//    private String createToken(Map<String, Object> claims, String email) {
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(email)
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
//                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
//    }

//    private Key getSignKey() {
//       byte[] keyBytes = Decoders.BASE64.decode(SECRET);
//       return Keys.hmacShaKeyFor(keyBytes);
//    }


}
