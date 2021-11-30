package com.nagarro.entity;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.*;

@Entity
public class Product {
@Id
@Column(unique=true,columnDefinition="VARCHAR(64)")
private String subject;
@OneToMany(mappedBy="product",cascade=CascadeType.ALL)
private List<Comments> reviews=new ArrayList<Comments>();
private String  messageBody;
private String question;
private String date;
private String userName;
public Product() {
	super();
}
public Product(String subject, String messageBody, String question, String date, String userName) {
	super();
	this.subject = subject;
	this.messageBody = messageBody;
	this.question=question;
	this.date = date;
	this.userName = userName;
}

public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
public List<Comments> getReviews() {
	return reviews;
}
public void setReviews(List<Comments> reviews) {
	this.reviews = reviews;
}

public String getMessageBody() {
	return messageBody;
}
public void setMessageBody(String messageBody) {
	this.messageBody = messageBody;
}
public String getQuestion() {
	return question;
}
public void setQuestion(String question) {
	this.question = question;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
}
