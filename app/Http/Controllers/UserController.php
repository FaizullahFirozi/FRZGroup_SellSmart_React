<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
     public function index(Request $request)
    {
        $query = User::latest();

        if($request->has('name') && $request->name != '') {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        $result = $query->paginate(10);

        return Inertia('Users/Index', ['usersData' => $result]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {


        $record = new User();

        $record->name = $request->name;
        $record->last_name = $request->last_name;
        $record->companies_id = $request->companies_id;
        $record->email = $request->email;
        $record->phone = $request->phone;
        $record->password = bcrypt($request->password); // Encrypting the password
      
        $record->save();

        return redirect('users')->with(['success' => 'کارمند په بریالئ توګه اضافه شوه ✔️']);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $usersData = User::findOrFail($id);
        return Inertia::render('Users/Edit', compact ('usersData'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
      
        
        $record = User::findOrFail($request->id);

        $record->last_name = $request->last_name;
        $record->companies_id = $request->companies_id;
        $record->email = $request->email;
        $record->phone = $request->phone;
        $record->password = bcrypt($request->password); // Encrypting the password
      

        return redirect('users')->with(['success' => 'د کارمند معلومات په بریالئ توګه تغیر شو ✔️']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $record = User::findOrFail($id);

        $record->delete();

        return redirect('users')->with('successDelete', 'کارمند په بریالی توګه ډیلیټ شو.');        
    }
}
