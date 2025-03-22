<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
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
              
            'company_name' => 'required|unique:companies',
            'company_address' => 'required',
            'company_email' => 'unique:companies',
            'company_phone' => 'unique:companies|min:10',
            'company_logo' => 'required',
        ];
        
    }
    public function messages(): array
    {
        return [
            'company_name.required' => 'د کمپنۍ نوم ضروری دی.',
            'company_name.unique' => 'دغه نوم له مخکی په سیسټم کی موجود دی.',
            'company_address.required' => 'د کمپنۍ آدرس ضروری دی.',
            'company_email.unique' => 'دغه ایمیل له مخکی په سیسټم کی موجود دی.',
            'company_phone.unique' => 'دغه نمبر له مخکی په سیسټم کی موجود دی.',
            'company_phone.min' => 'دغه نمبر باید کم تر کمه 10 عدده وی.',
            'company_logo.required' => 'د کمپنۍ لوګو ضروری دی.',
        ];
    }
}
