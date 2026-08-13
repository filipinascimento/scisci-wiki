# Forward reuse filter citation leakage

## Summary

Forward reuse filter citation leakage is the validation concern that requiring a new knowledge combination to be reused after publication can condition a novelty measure on future uptake that is related to citation outcomes.

## Canonical Form

- Unit of analysis: paper, new combination, reuse window, novelty score, citation outcome, or robustness specification.
- Typical representation: novelty estimates with and without a forward reuse filter, compared across short and long citation windows.
- Validation target: determine whether a novelty-outcome association is partly induced by a post-publication reuse requirement.
- Empirical signature: outcome estimates change when a future-reuse condition is removed or isolated from other filters.

## Uses in Science of Science

- Adds a design caveat to [new journal-pair novelty filter robustness](new_journal_pair_novelty_filter_robustness.md).
- Helps interpret [new journal-pair novelty](../measures/new_journal_pair_novelty.md) and [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md) when they use forward reuse to avoid trivial pairings.
- Warns evaluation systems not to use future-confirmed novelty as if it were observable at publication time.
- Generalizes to topic, keyword, patent, and embedding novelty measures that require later adoption before labeling a combination meaningful.

## Operationalization

- Compute the novelty measure under the main forward-reuse rule.
- Recompute it without the reuse requirement, with only the reuse requirement, and with alternative reuse windows.
- Compare short-window and long-window citation outcomes across variants.
- Separate ex ante novelty measurement from ex post validation of whether a combination proved durable.
- Report whether the reuse rule is used for measurement, validation, or sample cleaning.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) uses a three-year reuse requirement to reduce trivial new journal-pair combinations in the main novelty indicator.
- Their robustness appendix tests variants that remove or isolate this requirement.
- Wang et al. report that if all cited journals are included and only the reuse requirement is imposed, highly novel papers show a higher probability of being top-1% cited even under a three-year window.
- The authors interpret this as likely reflecting the inherent association between reuse and citations.
- In contrast, variants that do not impose the reuse requirement can show weaker or negative short-window associations, making the reuse filter a necessary sensitivity check.

## Caveats

- A reuse filter can be useful for excluding one-off parsing artifacts, but it should not be confused with an ex ante novelty signal.
- Future reuse may reflect field size, data coverage, or subsequent popularity rather than the intrinsic importance of the original combination.
- Removing the filter can admit noisy or trivial combinations, so both filtered and unfiltered results should be reported.
- The leakage concern is strongest when the same future window helps define both the exposure and the outcome.

## Links

- [new journal-pair novelty filter robustness](new_journal_pair_novelty_filter_robustness.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [novelty short-window undercount](novelty_short_window_undercount.md)
- [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md)
- [citation window selection](../methods/citation_window_selection.md)
- [novelty robustness specification sweep](novelty_robustness_specification_sweep.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `forward_reuse_filter_citation_leakage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: forward reuse filter; reuse-conditioned novelty; future reuse leakage; post-publication reuse sensitivity
