# Reviewer information-set citation censoring

## Summary

Reviewer information-set citation censoring is the design choice to measure applicant publication and citation history only up to the grant-review date, so controls approximate what reviewers could have known at evaluation time.

## Canonical Form

- Unit of analysis: proposal, principal investigator, publication, citation, review date, or reviewer information set.
- Typical representation: review-date-censored applicant history vector, pre-review citation count, or prior-publication control panel.
- Mechanism or validation target: separate peer-review information from post-review outcomes that reviewers could not observe.
- Empirical signature: review-score predictive value remains after applicant output controls are censored to the information available before review.

## Uses in Science of Science

- Tightens [grant peer-review value-added](../validations/grant_peer_review_value_added.md) by aligning controls with the information available to reviewers.
- Extends [applicant bibliometric control vector](applicant_bibliometric_control_vector.md) from a generic applicant-history measure to a time-indexed design choice.
- Helps prevent [applicant prestige-residualization stack](../validations/applicant_prestige_residualization_stack.md) from accidentally conditioning on post-review success.
- Supports robustness checks such as [publication-history functional-form stress test](../validations/publication_history_functional_form_stress_test.md).

## Operationalization

- Assign each proposal a review or award-decision date.
- Count applicant publications, citations, and hit papers using only records dated before that review date.
- Exclude post-review citations from prior-output controls even when they cite pre-review papers.
- Pair the censored control vector with study-section, institute, and review-year controls.
- Report whether citation windows are calendar-year or exact-date censored.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) describes applicant characteristics measured before review, including the author's prior publications and citations.
- The paper uses publication-history controls to test whether NIH percentile scores predict later outputs beyond information available about applicants.
- Supplementary robustness checks vary the publication-history specification, making the censoring rule a prerequisite for credible comparison.
- This motif is distinct from generic applicant prestige controls because its key boundary is temporal observability.

## Caveats

- Publication and citation database dates may not match what reviewers actually saw in CVs or biosketches.
- Reviewers can know informal information, preliminary data, or unpublished reputation signals not represented in bibliometric histories.
- Coarse annual dating can misclassify publications or citations near the review date.

## Links

- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [applicant bibliometric control vector](applicant_bibliometric_control_vector.md)
- [applicant prestige-residualization stack](../validations/applicant_prestige_residualization_stack.md)
- [publication-history functional-form stress test](../validations/publication_history_functional_form_stress_test.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](nih_study_section_review_process.md)
- [study-section-year fixed-effect identification](study_section_year_fixed_effect_identification.md)
- [grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [residual review-score response curve](../validations/residual_review_score_response_curve.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `reviewer_information_set_citation_censoring`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: review-date citation censoring; reviewer information-set controls; pre-review citation controls; applicant citation history censoring
