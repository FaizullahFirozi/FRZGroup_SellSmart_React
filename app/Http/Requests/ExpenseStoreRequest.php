<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
              
            'expense_name' => 'required|string|max:255',
            'expense_date' => 'required',
            'expense_amount' => 'required|numeric',
            'expense_amount_currency' => 'required',
        ];
        
    }
    public function messages(): array
    {
        return [
            'expense_name.required' => 'د مصرف نوم ضروری دی.',
            'expense_date.required' => 'د مصرف تاریخ ضروری دی.',
            'expense_amount.required' => 'د مصرف اندازه ضروری دی.',
            'expense_amount_currency.required' => 'د مصرف نوع ضروری دی.',
        ];
    }
}
