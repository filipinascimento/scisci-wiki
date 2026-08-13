# Grant hit-publication tail

## Summary

Grant hit-publication tail measures whether a funded project produces publications in extreme citation percentiles, such as the top 0.1%, 1%, or 5% of same-year papers.

## Canonical Form

- Unit of analysis: grant, grant-supported publication, citation percentile class, output window, or review-score bin.
- Typical representation: count of grant-linked papers in top citation-percentile classes.
- Measurement target: tail scientific output from a funded project, not only total publications or total citations.
- Empirical signature: stronger proposal scores predict more extreme top-tail publications after applicant and field controls.

## Uses in Science of Science

- Specializes [citation percentile indicators](citation_percentile_indicators.md) to grant-level evaluation.
- Supports [grant peer-review value-added](../validations/grant_peer_review_value_added.md) by testing whether review panels identify projects with exceptional upside.
- Complements average publication and citation outcomes in [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md).
- Connects funding evaluation to [novelty penalty](../mechanisms/novelty_penalty.md), because extreme outcomes can be sensitive to citation-window and field-normalization choices.

## Operationalization

- Link publications to grants using acknowledgments or grant-output linkage tables.
- Construct a citation reference set by publication year and, where possible, field or document type.
- Flag grant-linked publications in top percentile classes such as top 0.1%, top 1%, or top 5%.
- Aggregate counts or rates by grant, review-score bin, program, institute, or applicant group.
- Report citation cutoff years and tie handling because tail counts are sensitive to window length.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) defines hit publications as grant-acknowledging publications among the top 0.1%, 1%, or 5% most cited publications in their cohort.
- The paper uses all citations received through 2013 for the hit-publication classification.
- Li and Agha report that a one-standard-deviation worse NIH percentile score predicts 22.1%, 19.1%, and 16.0% reductions in top 0.1%, top 1%, and top 5% publications, respectively.
- The full text reports that the score gradient is steepest among the strongest applications and that a near-zero percentile score can double expected top 0.1% output relative to a score near the 10th percentile.
- The linked validation [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md) contrasts this upside prediction with the weaker evidence for screening out low-citation publications.

## Caveats

- Tail outcomes are sparse and unstable for small programs or short windows.
- Citation percentiles reflect attention, not direct social value.
- Grant acknowledgment coverage and publication attribution affect the denominator and the tail count.

## Links

- [citation percentile indicators](citation_percentile_indicators.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [residual review-score response curve](../validations/residual_review_score_response_curve.md)
- [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `grant_hit_publication_tail`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: grant hit papers; top-tail grant output; grant-linked top percentile papers; proposal hit-publication outcome
