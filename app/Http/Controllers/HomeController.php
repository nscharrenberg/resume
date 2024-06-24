<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Statamic\Facades\AssetContainer;
use Statamic\Facades\Asset;
use Statamic\Facades\Collection;
use Statamic\Facades\GlobalSet;

class HomeController extends Controller
{
    public function home(): Response
    {
        $personal = GlobalSet::findByHandle('personal');
        $work = Collection::find('work_experiences')->queryEntries()->with(['company'])->orderBy('ended_at', 'desc')->get();
        $study = Collection::find('studies')->queryEntries()->with('institute')->orderBy('graduated_at', 'desc')->get();
        $volunteering = Collection::find('volunteer_experiences')->queryEntries()->with(['company'])->orderBy('ended_at', 'desc')->get();
        $profile = AssetContainer::findByHandle('profile')->queryAssets()->where('path', $personal->inDefaultSite()->get('profile'))->first();

        return inertia('Home', [
           'title' => 'Hello World',
            'person' => [
                'name' => $personal->inDefaultSite()->get('name'),
                'email' => $personal->inDefaultSite()->get('email'),
                'github' => $personal->inDefaultSite()->get('github'),
                'linkedin' => $personal->inDefaultSite()->get('linkedin'),
                'location' => $personal->inDefaultSite()->get('location'),
                'subtitle' => $personal->inDefaultSite()->get('subtitle'),
                'profile' => asset("storage/" . $profile->path),
                'professions' => $personal->inDefaultSite()->get('professions')
            ],
            'work' => $work,
            'studies' => $study,
            'volunteering' => $volunteering,
        ]);
    }
}
