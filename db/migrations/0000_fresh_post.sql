CREATE TABLE `newsletter_emails` (
	`id` text PRIMARY KEY NOT NULL,
	`email_address` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `newsletter_emails_email_address_unique` ON `newsletter_emails` (`email_address`);