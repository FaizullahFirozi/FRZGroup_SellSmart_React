<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExpenseStoreRequest;
use App\Http\Requests\ExpenseUpdateRequest;
use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    

     public function index(Request $request)
    {
        $query = Expense::latest()->orderBy('id', 'desc');

        if($request->has('expense_name') && $request->expense_name != '') {
            $query->where('expense_name', 'like', '%' . $request->expense_name . '%');
        }

        $result = $query->paginate(10);

        return Inertia('Expenses/Index', ['expensesData' => $result]);
    }

    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Expenses/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExpenseStoreRequest $request)
    {
        // sleep(1);


        $record = new Expense();

        $record->expense_name = $request->expense_name;
        $record->expense_date = $request->expense_date;
        $record->expense_amount = $request->expense_amount;
        $record->expense_amount_currency = $request->expense_amount_currency;
        $record->created_by = Auth::user()->id;
        $record->save();

        return redirect('expenses')->with(['success' => 'مصارف په بریالئ توګه اضافه شوه ✔️']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $companiesData = Expense::findOrFail($id);
        return Inertia::render('Expenses/Edit', compact ('expensesData'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExpenseUpdateRequest $request, Expense $expense)
    {
      
        
        $record = Expense::findOrFail($request->id);
        $record->expense_name = $request->expense_name;
        $record->expense_date = $request->expense_date;
        $record->expense_amount = $request->expense_amount;
        $record->expense_amount_currency = $request->expense_amount_currency;
        $record->updated_by = Auth::user()->id;
        $record->update();

        return redirect('expenses')->with(['success' => 'مصرف معلومات په بریالئ توګه تغیر شو ✔️']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $items = Expense::findOrFail($id);

        $items->delete();

        return redirect('expenses')->with('successDelete', 'مصرف په بریالی توګه ډیلیټ شو.');        
    }
}
