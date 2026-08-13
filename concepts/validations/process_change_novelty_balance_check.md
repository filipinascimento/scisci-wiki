# Process-change novelty balance check

## Summary

Process-change novelty balance check tests whether a project course-change indicator is itself correlated with novelty before using it to separate selection from treatment mechanisms.

## Canonical Form

- Unit of analysis: project, process-change indicator, novelty score, funding source, or mechanism test.
- Typical representation: balance regression or correlation check between process change and novelty.
- Validation target: whether process-change variables can help interpret funding selection versus treatment.
- Empirical signature: process change is not significantly related to novelty, limiting its role as an alternative explanation.

## Uses in Science of Science

- Adds a validation layer to [funding selection-treatment split](../methods/funding_selection_treatment_split.md).
- Complements [interaction-effect alternative-explanation stress test](interaction_effect_alternative_explanation_stress_test.md).
- Helps interpret [funding status-interaction test](funding_status_interaction_test.md).
- Provides a design check for [funded-only peer-review validation](funded_only_peer_review_validation.md).

## Operationalization

- Define a project process-change or course-change indicator.
- Test its association with novelty and conventionality outcomes.
- Check whether funding model predicts process change.
- Use results to assess whether observed funding-novelty associations are likely selection or post-award treatment.
- Report uncertainty rather than treating a null balance check as proof of no mechanism.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) uses information about whether the research process changed after funding.
- The paper checks whether the process-change variable is significantly related to novelty before drawing mechanism implications.
- This balance check supports their argument that selection rather than post-award treatment is a plausible interpretation.
- The motif is reusable for funding-policy studies that observe only funded outputs.

## Caveats

- A null association can reflect low statistical power or noisy process-change measurement.
- Process change is self-reported and may miss subtler treatment effects.
- Selection and treatment can both operate in the same funding program.

## Links

- [funding selection-treatment split](../methods/funding_selection_treatment_split.md)
- [interaction-effect alternative-explanation stress test](interaction_effect_alternative_explanation_stress_test.md)
- [funding status-interaction test](funding_status_interaction_test.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [proposal submission observability gap](proposal_submission_observability_gap.md)
- [proposal commitment creativity constraint](../mechanisms/proposal_commitment_creativity_constraint.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `process_change_novelty_balance_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: process-change balance test; novelty process-change check; selection-treatment balance check; project course-change validation
