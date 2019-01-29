package com.nukesz.store.repository;

import java.util.Optional;

import com.nukesz.store.domain.ProductOrder;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProductOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {

	Page<ProductOrder> findAllByCustomerUserLogin(String login, Pageable pageable);

	Optional<ProductOrder> findByIdAndCustomerUserLogin(Long id, String login);

}
