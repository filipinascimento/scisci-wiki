# Out-of-order funded grant exception

## Summary

Out-of-order funded grant exception audits cases where grants with poor review percentiles are funded anyway, often because program officers or institutes override normal score ordering.

## Canonical Form

- Unit of analysis: funded grant, percentile score, institute funding decision, program-officer exception, or residual outcome.
- Typical representation: tail subset of funded applications with scores beyond the ordinary payline, compared to their expected outcomes.
- Validation target: determine whether non-score exceptions add information or alter score-outcome validity.
- Empirical signature: poorly scored but funded exceptions perform better than their original scores would predict.

## Uses in Science of Science

- Clarifies a boundary condition for [funded-only peer-review validation](funded_only_peer_review_validation.md).
- Helps interpret [residual review-score response curve](residual_review_score_response_curve.md) patterns in sparse high-percentile-score regions.
- Links [NIH study-section review process](../methods/nih_study_section_review_process.md) to institute-level discretion and programmatic priorities.
- Supports [funding-allocation design alternatives](../methods/funding_allocation_design_alternatives.md), because exceptions show where rule-based score order and expert/program judgment diverge.

## Operationalization

- Identify funded grants with percentile scores worse than the normal award range or beyond a documented payline.
- Compare their residual publication, citation, patent, or hit-publication outcomes with what the review score would predict.
- Separate programmatic exceptions, appeals, special initiatives, early-investigator policies, and data errors where metadata permit.
- Treat the subset as a selected exception group, not as a random sample of poorly scored applications.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) reports that applications with percentile scores over 50 constitute about 1% of funded applications.
- The paper states that these applications were highly unlikely to meet the standard award threshold and were instead funded out of order.
- In this score range, worse review scores are associated with higher citation counts, which Li and Agha interpret as evidence that program officers may identify a small fraction of applications that perform better than their initial scores suggest.
- The same pattern is presented as an exception to the general relationship in which worse scores predict lower residual publication and citation outcomes.

## Caveats

- Out-of-order funded grants are rare and selected, so they cannot identify the quality of all rejected or poorly scored proposals.
- Exceptional funding may reflect program priorities, portfolio balance, emergency relevance, institute budgets, or missing metadata rather than pure scientific quality.
- These cases can attenuate simple score-outcome estimates if they are not modeled separately.

## Links

- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [residual review-score response curve](residual_review_score_response_curve.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [funding-allocation design alternatives](../methods/funding_allocation_design_alternatives.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `out_of_order_funded_grant_exception`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: out-of-order funding; program-officer exception; payline exception; poor-score funded exception
