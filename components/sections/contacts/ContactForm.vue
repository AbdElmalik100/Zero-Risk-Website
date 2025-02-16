<template>
  <section class="my-32">
    <div class="container">
      <div class="p-10 max-md:px-4 border border-border-clr bg-box-clr rounded-xl flex lg:gap-12 gap-8  max-md:flex-col">
        <div class="flex flex-col gap-4 w-full">
          <h2 class="text-primary-500 font-bold text-3xl text-center mb-4">
            {{ contactsForm.title }}
          </h2>
          <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
            <div class="w-full">
              <input type="text" name="name" placeholder="الأسم" v-model="name" />
              <span v-if="errors.name" class="text-rose-600 text-sm block mt-1">
                {{ errors.name }}
              </span>
            </div>
            <div class="w-full">
              <input type="text" name="phone" placeholder="رقم الهاتف" v-model="phone" />
              <span v-if="errors.phone" class="text-rose-600 text-sm block mt-1">
                {{ errors.phone }}
              </span>
            </div>
            <div class="w-full">
              <input
                type="text"
                name="email"
                placeholder="البريد الالكتروني (أختياري)"
                v-model="email"
              />
              <span v-if="errors.email" class="text-rose-600 text-sm block mt-1">
                {{ errors.email }}
              </span>
            </div>
            <div class="w-full">
              <textarea
                name="message"
                placeholder="أضف رسالتك (أختياري)"
                rows="5"
                class="resize-none"
                v-model="message"
              ></textarea>
              <span v-if="errors.message" class="text-rose-600 text-sm block mt-1">
                {{ errors.message }}
              </span>
            </div>
            <button class="main-btn !w-full" :disabled="loading">
              <span v-if="loading" class="spinner w-6 h-6 block border-2 border-white rounded-full border-r-transparent animate-spin"></span>
              <span v-else>أرسال</span>
            </button>
          </form>
        </div>
        <div class="rounded-xl border border-border-clr bg-white p-8 w-full">
          <h2 class="text-navy-text text-3xl mb-3">
            {{ contactsForm.title }}
          </h2>
          <p class="text-paragraph-dark leading-8">
            {{ contactsForm.desc }}
          </p>
          <div class="mt-10 mb-8 flex flex-col gap-4">
            <div
              class="flex items-center gap-3 max-md:gap-2"
              v-for="(obj, key) in footer.contacts"
              :key="key"
            >
              <Icon :name="obj.icon" class="text-primary-500" size="1.5em" />
              <NuxtLink :to="obj.link" :dir="key == 'phone' ? 'ltr' : 'rtl'" target="_blank" class="flex-1 ltr:text-end  hover:underline max-md:text-xs">
                {{ obj.title }}
              </NuxtLink>
            </div>
          </div>
          <Socials :dark="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contactsForm, footer } from "~/data/data";
import * as yup from "yup";
import { useForm } from "vee-validate";

const {$sonner} = useNuxtApp()
const loading = ref(false);
const validationSchema = yup.object({
  name: yup.string().required("هذا الحقل لا يجب ان يكون فارغا"),
  phone: yup
    .string()
    .required("هذا الحقل لا يجب ان يكون فارغا")
    .min(8, "رقم الهاتف غير صحيح")
    .max(15, "رقم الهاتف غير صحيح"),
  // email: yup
  //   .string()
  //   .email("البريد الالكتروني غير صحيح")
  //   .required("هذا الحقل لا يجب ان يكون فارغا"),
  // message: yup.string().required("هذا الحقل لا يجب ان يكون فارغا"),
});

const { defineField, handleSubmit, errors, values, resetForm } = useForm({
  validationSchema,
});

const onSuccess = (values) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    $sonner.success("تم ارسال الرساله");
    resetForm()
  }, 2000)
};

const onSubmit = handleSubmit(onSuccess);

const [name, nameAttrs] = defineField("name");
const [phone, phoneAttrs] = defineField("phone");
const [email, emailAttrs] = defineField("email");
const [message, messageAttrs] = defineField("message");
</script>

<style lang="scss" scoped></style>
