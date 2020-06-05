sudo apt-get install php-xdebug
sudo phpenmod xdebugf
#gedit /etc/php/7.3/mods-available/xdebug.ini
#ADD THIS
#xdebug.remote_enable = 1
#xdebug.remote_port = 9000
#xdebug.idekey = PHPSTORM
#xdebug.show_error_trace = 1
#xdebug.remote_autostart = 0
