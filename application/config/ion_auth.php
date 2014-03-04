<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* Name:  Ion Auth Config
* 
* Author: Ben Edmunds
* 	  ben.edmunds@gmail.com
*         @benedmunds
*          
* Added Awesomeness: Phil Sturgeon
* 
* Location: http://github.com/benedmunds/CodeIgniter-Ion-Auth/
*          
* Created:  10.01.2009 
* 
* Description:  Modified auth system based on redux_auth with extensive customization.  This is basically what Redux Auth 2 should be.
* Original Author name has been kept but that does not mean that the method has not been modified.
* 
*/

	/**
	 * Tables.
	 **/
	$config['tables_seekers']['groups']  = 'groups';
	$config['tables_seekers']['users']   = 'users';
	$config['tables_seekers']['meta']   = 'seekers_meta';
        
	$config['tables_recruiters']['groups']  = 'groups';
	$config['tables_recruiters']['users']   = 'users';
	$config['tables_recruiters']['meta']   = 'recruiters_meta';
	
    $config['tables_admins']['groups']  = 'groups';
	$config['tables_admins']['users']   = 'users';
	$config['tables_admins']['meta']   = 'admins_meta';
        
        
        
	
	/**
	 * Site Title, example.com
	 */
	$config['site_title']		   = "rusagar";
	
	/**
	 * Admin Email, admin@example.com
	 */
	$config['admin_email']		   = "noreply@rusagar.com";
	
	/**
	 * Default group, use name
	 */
	$config['default_group']       = 'members';
	
	/**
	 * Default administrators group, use name
	 */
	$config['admin_group']         = 'admin';
	 
	/**
	 * Meta table column you want to join WITH.
	 * Joins from users.id
	 **/
	$config['join']                = 'user_id';
	
	/**
	 * Columns in your meta table,
	 * id not required.
	 **/
	$config['columns_seekers']            = array('experience','job_type_id','practice_area_id','countries_id');
	$config['columns_recruiters']         = array('contact_number', 'entity_id', 'approved', 'is_admin', 'approved_by_user_id');
	$config['columns_admins']             = array('position');
	
	/**
	 * A database column which is used to
	 * login with.
	 **/
	$config['identity']            = 'email';
		 
	/**
	 * Minimum Required Length of Password
	 **/
	$config['min_password_length'] = 8;
	
	/**
	 * Maximum Allowed Length of Password
	 **/
	$config['max_password_length'] = 20;

	/**
	 * Email Activation for registration
	 **/
	$config['email_activation']    = true;
	
	/**
	 * Allow users to be remembered and enable auto-login
	 **/
	$config['remember_users']      = true;
	
	/**
	 * How long to remember the user (seconds)
	 **/
	$config['user_expire']         = 86500;
	
	/**
	 * Extend the users cookies everytime they auto-login
	 **/
	$config['user_extend_on_login'] = false;
	
	/**
	 * Type of email to send (HTML or text)
	 * Default : html
	 **/
	$config['email_type'] = 'html';
	
	/**
	 * Folder where email templates are stored.
     * Default : auth/
	 **/
	$config['email_templates']     = 'emails/';
	
	/**
	 * activate Account Email Template
     * Default : activate.tpl.php
	 **/
	$config['email_activate']   = 'job_seeker_email_activation.tpl.php';
	
	/**
	 * Forgot Password Email Template
     * Default : forgot_password.tpl.php
	 **/
	$config['email_forgot_password']   = 'seeker_forgot_password.tpl.php';

	/**
	 * Forgot Password Complete Email Template
     * Default : new_password.tpl.php
	 **/
	$config['email_forgot_password_complete']   = 'seeker_new_password.tpl.php';
	
	/**
	 * Salt Length
	 * Salt length needs to be at least as long 
	 * as the minimum password length.
	 **/
	$config['salt_length'] = 10;

	/**
	 * Should the salt be stored in the database?
	 * This will change your password encryption algorithm, 
	 * default password, 'password', changes to 
	 * fbaa5e216d163a02ae630ab1a43372635dd374c0 with default salt.
	 **/
	$config['store_salt'] = false;
	
	/**
	 * Message Start Delimiter
	 **/
	$config['message_start_delimiter'] = '<p>';
	
	/**
	 * Message End Delimiter
	 **/
	$config['message_end_delimiter'] = '</p>';
	
	/**
	 * Error Start Delimiter
	 **/
	$config['error_start_delimiter'] = '<p>';
	
	/**
	 * Error End Delimiter
	 **/
	$config['error_end_delimiter'] = '</p>';
	
/* End of file ion_auth.php */
/* Location: ./system/application/config/ion_auth.php */