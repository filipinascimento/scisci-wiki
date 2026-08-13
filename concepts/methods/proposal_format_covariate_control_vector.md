# Proposal-format covariate control vector

## Summary

Proposal-format covariate control vector is a robustness strategy that controls for observable proposal structure and author features when proposal fixed effects cannot be used.

## Canonical Form

- Unit of analysis: proposal, applicant, format feature, topic dummy, author metric, or review score.
- Typical representation: regression control vector of length, references, figures, sections, topic indicators, and applicant bibliometrics.
- Method target: reduce confounding in proposal-level analyses where the focal predictor does not vary within proposal.
- Empirical signature: controls explain substantial score variation and stabilize novelty or quality-related estimates.

## Uses in Science of Science

- Supports [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md).
- Complements [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md) when proposal-level variables such as novelty cannot be estimated with proposal fixed effects.
- Provides a concrete check in [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md).

## Operationalization

- Extract observable proposal features such as word count, references, figures, and section structure.
- Add topic or vocabulary dummies when controlled-vocabulary coding is available.
- Add applicant publication and citation measures where appropriate.
- Compare focal estimates with and without the control vector.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) uses words, references, figures, introduction-section presence, MeSH topic dummies, author publications, and author citations as controls.
- The paper uses this vector because proposal novelty is proposal-level and cannot be estimated with proposal fixed effects.
- The authors report that the control vector explains nearly as much variation as proposal fixed effects in the relevant specifications.

## Caveats

- Observable format controls do not prove true proposal quality.
- Applicant metrics can introduce prestige or cumulative-advantage controls that are themselves mechanisms.
- Control vectors should not absorb the substantive novelty signal being estimated.

## Links

- [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md)
- [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md)
- [professional-librarian proposal MeSH coding](professional_librarian_proposal_mesh_coding.md)
- [single-item disease-impact score](../measures/single_item_disease_impact_score.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `proposal_format_covariate_control_vector`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: proposal quality control vector; proposal format controls; observable proposal controls; author-proposal covariate stack
