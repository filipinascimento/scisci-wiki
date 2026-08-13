# Alphabetical author-order chaperone null

## Summary

Alphabetical author-order chaperone null tests whether a chaperone-effect signal survives fields where bylines may be sorted alphabetically rather than by contribution or seniority.

## Canonical Form

- Unit of analysis: paper, author list, journal, field, or chaperone-effect ratio.
- Typical representation: alphabetical baseline `calphabet`, adjusted ratio `Calphabet = c / calphabet`, alphabetically ordered publication exclusion, or robustness comparison.
- Validation target: whether author-order-based chaperone estimates are artifacts of alphabetical byline conventions.
- Empirical signature: observed chaperone patterns remain distinguishable from alphabetical-order expectations or persist after excluding alphabetically ordered papers.

## Uses in Science of Science

- Validates [chaperone-effect ratio](../measures/chaperone_effect_ratio.md) in fields where author order may not encode role.
- Complements [random author-order chaperone null](random_author_order_chaperone_null.md).
- Supports [venue chaperone effect](../mechanisms/venue_chaperone_effect.md) caveats for mathematics, physics, and other alphabetic-order disciplines.
- Links author-order analysis to [task specialization](../mechanisms/task_specialization.md), where byline role proxies are field-specific.
- Provides a robustness design for [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).

## Operationalization

- Sort every paper's author list alphabetically to construct an alphabetical-order baseline.
- Recompute PI experience categories and raw chaperone ratios under this baseline.
- Compute `Calphabet = c / calphabet`.
- Run a second robustness analysis that excludes publications whose observed author lists are alphabetically ordered.
- Compare conclusions across the full dataset, alphabetical baseline, and nonalphabetical subset.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) introduces `calphabet` for fields where alphabetical author sorting is important.
- The paper defines `Calphabet = c / calphabet` and uses it alongside `C = c / crandom`.
- Sekara et al. report that mathematics shows few signs that experience influences junior-to-senior transitions, consistent with strong alphabetical-order conventions.
- In robustness checks, the authors remove alphabetically ordered publications; this removes 75.1% of mathematics publications, 30.9% of physics, 23.3% of chemistry, 20.8% of interdisciplinary journals, 17.7% of biology, and 14.4% of medicine.
- They report that conclusions are robust across both the full dataset and the subset excluding alphabetically ordered publications.

## Caveats

- Alphabetical ordering can occur by chance, especially in small teams.
- Removing alphabetically ordered papers can remove a large and nonrandom share of some fields.
- The null tests author-order artifacts, not omitted variables such as reputation, topic, or editorial selection.
- Fields with mixed conventions need field-specific interpretation rather than a single global correction.

## Links

- [chaperone-effect ratio](../measures/chaperone_effect_ratio.md)
- [random author-order chaperone null](random_author_order_chaperone_null.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [task specialization](../mechanisms/task_specialization.md)
- [author-position citation components](../measures/author_position_citation_components.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `alphabetical_author_order_chaperone_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: alphabetical byline null; calphabet baseline; alphabetical-order robustness; alphabetic authorship chaperone check
