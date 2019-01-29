package com.nukesz.store.repository;

import com.nukesz.store.domain.OrderItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the OrderItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	Page<OrderItem> findAllByOrderCustomerUserLogin(String string, Pageable pageable);

	Optional<OrderItem> findByIdAndOrderCustomerUserLogin(Long id, String login);

}
