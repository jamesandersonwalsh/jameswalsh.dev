CREATE TABLE `newsletter_emails` (
	`address` text PRIMARY KEY NOT NULL,
	`status` text NOT NULL,
	`verify_attempts` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE INDEX `status_idx` ON `newsletter_emails` (`status`);