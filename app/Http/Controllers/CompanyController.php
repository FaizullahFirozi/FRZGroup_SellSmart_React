<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

        $result = $query->paginate(10);

        return Inertia('Companies/Index', ['companiesData' => $result]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        // sleep(1);

        $company = new Company();

        $company->company_name = $request->company_name;
        $company->company_address = $request->company_address;
        $company->company_phone = $request->company_phone;
        $company->company_email = $request->company_email;
        $logo_path = $request->file('company_logo')->store('CompanyLogos', 'public');
        $company->company_logo = $logo_path;  
        // $company->company_logo = $request->hasFile('company_logo') 
        // ? $request->file('company_logo')->store('CompanyLogos', 'public') 
        // : null;
        $company->save();

        return redirect('companies')->with(['success' => 'شرکت په بریالئ توګه اضافه شوه ✔️']);
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
        $companiesData = Company::findOrFail($id);
        return Inertia::render('Companies/Edit', compact ('companiesData'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCompanyRequest $request, Company $company)
    {
      
        
        $items = Company::findOrFail($request->id);
        $items->company_name = $request->company_name;
        $items->company_address = $request->company_address;
        $items->company_phone = $request->company_phone;
        $items->company_email = $request->company_email;
        $items->company_logo = $request->hasFile('company_logo')
        ? $request->file('company_logo')->store('CompanyLogos', 'public')
        : $items->company_logo;
        $items->update();

        return redirect('companies')->with(['success' => 'شرکت معلومات په بریالئ توګه تغیر شو ✔️']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $items = Company::findOrFail($id);

        if($items->company_logo){
            Storage::disk('public')->delete($items->company_logo);
        }

        $items->delete();

        return redirect('companies')->with('successDelete', 'شرکت په بریالی توګه ډیلیټ شو.');        
    }
}
