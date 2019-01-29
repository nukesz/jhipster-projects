package com.nukesz.store.repository;

import com.nukesz.store.domain.Invoice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Invoice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

	Page<Invoice> findAllByOrderCustomerUserLogin(String login, Pageable pageable);

	Optional<Invoice> findByIdAndOrderCustomerUserLogin(Long id, String login);

}
