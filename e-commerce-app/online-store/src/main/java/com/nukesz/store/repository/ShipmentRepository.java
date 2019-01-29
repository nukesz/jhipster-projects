package com.nukesz.store.repository;

import com.nukesz.store.domain.Shipment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Shipment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

	Page<Shipment> findAllByInvoiceOrderCustomerUserLogin(String login, Pageable pageable);

	Optional<Shipment> findByIdAndInvoiceOrderCustomerUserLogin(Long id, String login);

}
