<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
              'phone' => ['required','min:10',  'unique:users,phone,' . $this->route('users')->id],
              'email' => ['required', 'unique:users,email,' . $this->route('users')->id],
            //   'companies_id' => 'required',
    
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
