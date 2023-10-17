package com.ReactApp;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users/show")    

@Service
public class UserController {
   
	@Autowired
    private  UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<String> addUser(@RequestBody User user) {
    	System.out.println(user);
        userRepository.save(user);
        return ResponseEntity.ok("User added successfully");
    }
    
    @GetMapping
    public List<User> getAllUsers() {
//    	System.out.println(userRepository.findAll().listIterator());
    	 return userRepository.findAll();
    	
    }
        
      
    
    
}
  
    
    




