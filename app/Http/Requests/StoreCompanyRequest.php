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
            'company_name' => 'required',
            'company_address' => 'required',
            'company_phone' => 'unique:companies',
        ];
        
    }
    public function messages(): array
    {
        return [
            'company_name.required' => 'د کمپنۍ نوم ضروری دی.',
            'company_address.required' => 'د کمپنۍ آدرس ضروری دی.',
            'company_phone.unique' => 'دغه نمبر له مخکی په سیسټم کی موجود دی.',
        ];
    }
}
