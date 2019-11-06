
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `role` enum('admin','doctor_assistant','doctor','patient') NOT NULL DEFAULT 'patient',
  `pass_hash` varchar(255) NOT NULL,
  `status` enum('active','inactive','sleep') DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8  ;


CREATE TABLE IF NOT EXISTS `users_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('access','menu','') COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `order` int(11) NOT NULL,
  `public` int(1) NOT NULL DEFAULT '1',
  `display` int(11) NOT NULL DEFAULT '1',
  `status` enum('active','inactive') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ;


CREATE TABLE IF NOT EXISTS `users_role_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('active','inactive') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ;

INSERT INTO `users_role_permissions` (`id`, `role`, `area`, `permissions`, `status`) VALUES
(1, 'admin', '', '{"1":"1"}', 'active'),
(2, 'doctor', 'panel', '{"1":"1","2":"1","3":"1"}', 'active'),
(3, 'assistant', 'panel', '{"1":"1"}', 'active'),
(4, 'patient', '', '{"1":"1","2":"1","3":"1"}', 'active');


CREATE TABLE IF NOT EXISTS `user_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET latin1 NOT NULL,
  `ip_address` varchar(255) CHARACTER SET latin1 NOT NULL,
  `session_randomkey` varchar(255) CHARACTER SET latin1 NOT NULL,
  `url_in` mediumtext CHARACTER SET latin1 NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci  ;