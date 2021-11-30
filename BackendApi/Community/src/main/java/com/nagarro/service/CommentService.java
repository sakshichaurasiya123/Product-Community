package com.nagarro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.entity.Product;
import com.nagarro.entity.Comments;
import com.nagarro.repository.ReviewRepository;
import com.nagarro.serviceInterface.ReviewServiceInterface;
@Service
public class CommentService {

@Autowired
private ReviewRepository repo;

//This method is used to get list of review
public List<Comments> getAllComment(Product product){
  return repo.findByProduct(product);	
}

//This method is used to get all count review
public Long countAllComment()
{
return	repo.count();
}

}
