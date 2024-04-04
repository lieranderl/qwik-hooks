import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import HookHeader from "~/components/hooks/hook-header";
import ListOfHooks from "~/docs/index";

export default component$(() => {
    const location = useLocation();
    const selectedHook = useSignal(ListOfHooks.find((hook) => hook.key === location.params.hook));

    useTask$(({ track }) => {
        track(() => location.params.hook);
        selectedHook.value = ListOfHooks.find((hook) => hook.key === location.params.hook);
        console.log(selectedHook.value);
    });

    if (!selectedHook.value) {
        return (
            <div class="flex flex-col mx-auto my-16 max-w-[1024px] justify-center gap-10">
                <div class="flex flex-col bg-foreground gap-10  p-10 rounded">
                    <HookHeader title="404" description="Hook not found" />
                </div>
            </div>
        );
    }

    return (
        <div class="w-full max-w-[1024px] my-16 mx-auto">
            <section class="p-5 md:p-[4vw] lg:p-12 pt-0 flex flex-col gap-8 md:gap-[6vw] lg:gap-12 bg-foreground z-0 rounded">
                <span>oli</span>
            </section>
        </div>
    );
});
