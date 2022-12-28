# Faker

- Faker là một thư viện php giúp bạo tạo dữ liệu giả.
- Cài đặt: Faker yêu cầu PHP phiên bản > 7.1
- Cài đặt bằng composer:

```bash
composer require fakerphp/faker
```

- Sử dụng:

```php
<?php
// require the Faker autoloader
require_once 'vendor/autoload.php';
```

- Ví dụ tạo dữ liệu giả:

```php
<?php
// use the factory to create a Faker\Generator instance
$faker = Faker\Factory::create();
//generate data by accessing properties
echo $faker->name() . "<br>";
// Meaghan Wiegand
echo $faker->address() . "<br>";
// 89426 Taylor Dam Apt. 708 Thoraberg, DE 27436-1150
echo $faker->text() . "<br>";
// Distinctio non animi velit suscipit. Perspiciatis iusto cum illum error sint facilis soluta. Fugiat quae non eum consequatur et exercitationem vitae nemo. Quas rem quae et.
echo $faker->email() . "<br>";
// gschiller@schulist.org
echo $faker->phoneNumber() . "<br>";
// 325-288-9859
echo $faker->date("d-m-Y") . "<br>";
//04-12-1987
```
