<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
              
            'name' => 'required',
            'email' => 'unique:users',
            'phone' => 'unique:users|min:10',
            // 'companies_id' => 'required',
        ];
        
    }
    public function messages(): array
    {
        return [
            'name.required' => 'د یوزر نوم ضروری دی.',
            'email.unique' => 'دغه ایمیل له مخکی په سیسټم کی موجود دی.',
            'phone.unique' => 'دغه نمبر له مخکی په سیسټم کی موجود دی.',
            'phone.min' => 'دغه نمبر باید کم تر کمه 10 عدده وی.',
            // 'companies_id.required' => 'د کمپنۍ اتخاب ضروری دی.',
        ];
    }
}
