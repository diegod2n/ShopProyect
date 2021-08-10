package com.barber.shop.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "add_to_appointments")
public class AddtoAppointment {
	@Id
	long id;
	@JsonIgnore
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "client_id")
	Client client;
	
    String date_start;
    
    String date_end;
    

}
