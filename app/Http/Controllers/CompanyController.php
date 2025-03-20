<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Company::latest();

        if($request->has('company_name') && $request->company_name != '') {
            $query->where('company_name', 'like', '%' . $request->company_name . '%');
        }

        $companies = $query->paginate(10);

        return Inertia('Company/Index', ['companies' => $companies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Company/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        sleep(1);

        $company = new Company();

        $company->company_name = $request->company_name;
        $company->company_address = $request->company_address;
        $company->company_phone = $request->company_phone;
        $company->contact_email = $request->contact_email;
        // $logo_path = $request->file('company_logo')->store('CompanyLogos', 'public');
        // $company->company_logo = $logo_path;
        $company->company_logo = $request->hasFile('company_logo') 
        ? $request->file('company_logo')->store('CompanyLogos', 'public') 
        : null;
        $company->save();

        return redirect('company')->with(['success' => 'شرکت په بریالئ توګه اضافه شوه ✔️']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $company = Company::findOrFail($id);

        return Inertia::render('Company/Edit', compact ('company'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCompanyRequest $request, Company $company)
    {
        $item = Company::findOrFail($request->id);
        $item->company_name = $request->company_name;
        $item->company_address = $request->company_address;
        $item->company_phone = $request->company_phone;
        $item->contact_email = $request->contact_email;
        $item->company_logo = $request->hasFile('company_logo')
        ? $request->file('company_logo')->store('CompanyLogos', 'public')
        : $item->company_logo;
        $item->update();

        return redirect('company')->with(['success' => 'شرکت په بریالئ توګه تازه شوه ✔️']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
}
