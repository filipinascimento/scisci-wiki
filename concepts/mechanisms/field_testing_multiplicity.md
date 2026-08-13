# Field testing multiplicity

## Summary

Field testing multiplicity describes the credibility loss that occurs when many independent teams test the same or related questions and attention concentrates on whichever study first reports statistical significance.

## Canonical Form

- Unit of analysis: field, hypothesis family, research question, team, study, or positive claim.
- Typical representation: number of independent studies `n`, repeated-testing scenario, competing-team count, or field-level discovery race.
- Mechanism: multiple teams create many chances for at least one positive finding, so isolated significant results become less credible unless the full evidence set is considered.
- Empirical signature: exciting first findings are followed by mixed replications, refutations, or rapidly alternating claims.

## Uses in Science of Science

- Extends [positive predictive value of findings](../measures/positive_predictive_value_findings.md) from a single study to a field with many teams.
- Connects [peer review and gatekeeping](peer_review_gatekeeping.md), publication incentives, and [selective reporting](publication_bias_selective_reporting.md) to field-level evidence accumulation.
- Gives a mechanism for why [replication and reproducibility](../validations/replication_reproducibility.md) can fail in hot or competitive areas.
- Complements [pre-study odds](../measures/pre_study_odds.md) and [research bias parameter](../measures/research_bias_parameter.md) by tracking the number of attempts, not just their plausibility or bias.

## Operationalization

- Count the number of teams, studies, registered protocols, preprints, conference reports, or datasets probing the same relationship.
- Model the probability that at least one study reports significance as the number of independent tests grows.
- Evaluate claims using the total evidence base, not only the most visible positive result.
- Use registries, systematic reviews, and field-level search logs to reveal unreported or less visible attempts.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) models `n` independent studies testing the same question and shows that the PPV of isolated findings can decrease as `n` grows.
- The paper argues that globalization of research makes it common for many teams to probe the same or similar questions.
- Ioannidis states that fields often give unilateral attention to at least one positive study, even when many teams are testing related relationships.
- The genome-association example shows that even without bias, a formally significant result from one of ten teams can add little credibility when pre-study odds are extremely low.

## Caveats

- Independent testing can improve knowledge when all results are visible and synthesized.
- Counting teams is difficult when unpublished, abandoned, or private analyses are not observable.
- Multiple testing corrections within one paper do not solve field-level multiplicity across teams and reports.
- Strong registries and living meta-analyses can turn multiplicity from a bias source into an evidence resource.

## Links

- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [pre-study odds](../measures/pre_study_odds.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [single-team significance overemphasis](../validations/single_team_significance_overemphasis.md)
- [hot-field Proteus phenomenon](hot_field_proteus_phenomenon.md)
- [selective reporting and publication bias](publication_bias_selective_reporting.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `field_testing_multiplicity`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: repeated independent testing; competing-team multiplicity; field-level multiple testing; many-team significance chase
