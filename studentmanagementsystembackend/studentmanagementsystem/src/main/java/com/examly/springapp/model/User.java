package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="_user")
public class User {
    @Id
    private String studentId;
    private String enterName;
    private String enterDate;
    private String enterAddress;
    private String enterPhoneNo;
    private String enterEmailId;
    private String parentName;
    private String bloodGroup;
    private String selectDepartment;
}
