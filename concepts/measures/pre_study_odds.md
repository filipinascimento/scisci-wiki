# Pre-study odds

## Summary

Pre-study odds measure how plausible a tested relationship is before a study is run, usually as the ratio of true relationships to non-true relationships among the hypotheses being probed in a field.

## Canonical Form

- Unit of analysis: hypothesis family, field, study design, tested relationship, or discovery screen.
- Typical representation: ratio `R` of true to non-true relationships, pre-study probability `R / (R + 1)`, or ordinal prior-likelihood class.
- Measurement target: background plausibility before a statistically significant result is observed.
- Empirical signature: the same p-value implies lower finding credibility when the field is testing many weakly preselected hypotheses.

## Uses in Science of Science

- Supplies a core input to [positive predictive value of findings](positive_predictive_value_findings.md).
- Separates confirmatory research from exploratory, high-throughput, or discovery-oriented search.
- Connects [scientific problem choice](../mechanisms/scientific_problem_choice.md) to research reliability: broad search can be valuable but starts from low prior odds.
- Helps explain why [replication and reproducibility](../validations/replication_reproducibility.md) vary across fields even under the same nominal significance threshold.

## Operationalization

- Define the family of relationships being probed, not only the one reported in the paper.
- Estimate or bracket the number of plausible true relationships and the number of null relationships being tested.
- Treat pre-study odds as field- and design-specific, with confirmatory trials, meta-analyses, exploratory epidemiology, and massive screens assigned different regimes.
- Report sensitivity of PPV or false-positive risk to plausible `R` values instead of treating one prior probability as known.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) defines `R` as the ratio of true relationships to no relationships among those tested in a scientific field.
- The paper states that the pre-study probability of a relationship being true is `R / (R + 1)`.
- In Ioannidis' worked genome-association example, many polymorphisms are tested while only a small number are expected to be truly associated, producing very low pre-study odds.
- The paper's corollaries argue that the greater the number and the lesser the preselection of tested relationships, the less likely claimed findings are to be true.

## Caveats

- Pre-study odds are often subjective and difficult to estimate directly.
- Narrowly defining the hypothesis family can inflate apparent prior plausibility.
- Low pre-study odds do not mean exploratory research is useless; they mean individual positive claims need stronger validation.
- Pre-study odds should be paired with [study power and false-positive risk](study_power_false_positive_risk.md), [research bias parameter](research_bias_parameter.md), and [field testing multiplicity](../mechanisms/field_testing_multiplicity.md).

## Links

- [positive predictive value of findings](positive_predictive_value_findings.md)
- [study power and false-positive risk](study_power_false_positive_risk.md)
- [research bias parameter](research_bias_parameter.md)
- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `pre_study_odds`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: pre-study probability; prior odds of true relationships; field-level prior plausibility; R true-to-null ratio
