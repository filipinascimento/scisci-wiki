# Venue-history left-censoring check

## Summary

New or chaperoned author labels can be distorted when relevant venue history predates the observed panel, so venue-experience studies need left-censoring checks.

## Canonical Form

- Unit of analysis: author-venue history within a bounded observation window.
- Typical representation: wash-in period, early-window exclusion, or first-observed-publication flag.
- Validation target: misclassification caused by unobserved pre-panel venue experience.
- Empirical signature: category shares or chaperone estimates change when early years are excluded or extended records are added.

## Uses in Science of Science

- Adds a temporal boundary audit to [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).
- Useful for any venue-specific career-history label derived from finite publication panels.
- Connects chaperone designs to broader [finite-window tail cutoff](finite_window_tail_cutoff.md) issues.

## Operationalization

- Define a wash-in period and exclude or flag authors whose first observed target-venue paper occurs near the panel start.
- Compare category shares after adding older source records or publisher histories.
- Report how many new or chaperoned labels could be left-censored.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) defines categories by prior same-journal history while constructing panels with finite start years.
- This creates an inferred validation risk for author labels near the left boundary of the panel.

## Caveats

- The risk is inferred from the design rather than emphasized as a central empirical result.
- Older records may have poorer author metadata, so extending the window can introduce other errors.

## Links

- [Journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [Chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [Finite-window tail cutoff](finite_window_tail_cutoff.md)
- [Publisher-history augmentation for venue panels](../methods/publisher_history_augmentation_for_venue_panels.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `venue_history_left_censoring_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: venue panel left censoring; author venue-history censoring check; chaperone label wash-in audit
