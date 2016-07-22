<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->delete();

        Project::create([
            'name' => 'AngularJS',
            'description' => 'HTML enhanced for web apps!',
            ]);
        Project::create([
            'name' => 'React',
            'description' => 'A JavaScript library for building user interfaces.',
            ]);
        Project::create([
            'name' => 'Backbone',
            'description' => 'Models for your apps.',
            ]);
        Project::create([
            'name' => 'Angular 2',
            'description' => 'One framework. Mobile and desktop.',
            ]);
    }
}
