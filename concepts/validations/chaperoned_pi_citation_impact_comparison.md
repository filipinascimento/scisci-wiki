# Chaperoned PI citation-impact comparison

## Summary

Chaperoned PI citation-impact comparison tests whether papers led by chaperoned senior authors receive different later citation impact than papers led by new or established senior authors in the same venue.

## Canonical Form

- Unit of analysis: paper, senior-author category, journal, publication year, citation window, or field.
- Typical representation: average five-year citations by new, chaperoned, and established PI category.
- Validation target: whether venue-specific senior-author experience is associated with downstream citation impact, not only publication access.
- Empirical signature: chaperoned and established PI papers show similar citation impact, while new PI papers have lower average impact in high-impact interdisciplinary venues.

## Uses in Science of Science

- Adds an outcome validation to [venue chaperone effect](../mechanisms/venue_chaperone_effect.md).
- Uses [venue PI experience categories](../measures/venue_pi_experience_categories.md) as treatment-like labels.
- Connects venue-specific apprenticeship to [citation impact indicators](../measures/citation_impact_indicators.md).
- Supports [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md) while preserving causal caveats.
- Helps [responsible metrics](../measures/responsible_metrics.md) users avoid interpreting senior-author category as quality without validation.

## Operationalization

- Classify papers by the senior author's venue PI experience category.
- Measure paper impact using a fixed citation window, such as citations received five years after publication.
- Compare average impact across new, chaperoned, and established PI papers within a journal or journal group.
- Stratify by high-impact interdisciplinary venues versus specialized field journals.
- Interpret differences as associations unless rejected-paper and submission data are available.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) measures paper impact as `c5`, citations five years after publication.
- In Nature, the paper reports that established and chaperoned PI papers have indistinguishable average impact.
- Contrary to the authors' initial expectation, Nature papers by new PIs receive on average about half the citations of papers by chaperoned and established PIs.
- The same pattern appears across the broader interdisciplinary-journal group, while differences in specialized field journals tend to be smaller.
- Sekara et al. explicitly caution that the design does not identify the deeper mentor-protege mechanisms and does not include scientist exit from the system.

## Caveats

- Citation impact is not the same as quality, mentorship, or acceptance probability.
- The comparison observes only accepted papers and cannot separate submission selection from editorial selection.
- Chaperoned PI status can proxy for topic, lab resources, reputation, and network access.
- Five-year citation windows may still vary by field, article type, and publication year.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [chaperone-effect ratio](../measures/chaperone_effect_ratio.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `chaperoned_pi_citation_impact_comparison`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: chaperoned senior-author citation comparison; PI category impact comparison; chaperone impact validation; c5 PI category comparison
