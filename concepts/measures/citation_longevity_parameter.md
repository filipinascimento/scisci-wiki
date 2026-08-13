# Citation longevity parameter

## Summary

The citation longevity parameter measures how slowly or quickly attention to a paper decays after its citation peak in a fitted citation-history model.

## Canonical Form

- Unit of analysis: paper, citation trajectory, journal cohort, field, or topic.
- Typical representation: longevity parameter sigma, decay-rate parameter, citation-survival width, or long-memory citation parameter.
- Mechanism or measurement target: durability of citation attention and decay rate after novelty fades.
- Empirical signature: papers with similar immediacy or fitness can differ in how long they continue to attract citations.

## Uses in Science of Science

- Provides a paper-level measure for [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Helps separate durable attention from early attention measured by the [citation immediacy parameter](citation_immediacy_parameter.md).
- Supports [long-term citation prediction](../methods/long_term_citation_prediction.md) by fitting the decay shape of a paper's citation trajectory.
- Links delayed-recognition and long-lived trajectories to [sleeping beauty](../mechanisms/sleeping_beauty.md), [delayed recognition](../mechanisms/delayed_recognition.md), and [citation trajectory models](../methods/citation_trajectory_models.md).
- Complements direct [citation life-cycle half-life](citation_life_cycle_half_life.md) measures that summarize post-peak decay time without a full parametric trajectory model.

## Operationalization

- Fit cumulative or annual citation histories with relative fitness, immediacy, and longevity parameters.
- Interpret longevity as the width or decay-rate component of the citation-aging curve.
- When using the Wang-Song-Barabasi model, estimate longevity through the [lognormal citation survival function](../methods/lognormal_citation_survival_function.md).
- Compare longevity across fields, journals, topics, teams, and document types, preferably with field/year normalization.
- Use citation contexts when long-lived citation attention may reflect historical background, methods use, perfunctory citation, or controversy.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) defines longevity as a parameter capturing the decay rate in a paper-specific citation-history model.
- The paper models aging with a log-normal survival probability and then estimates relative fitness, immediacy, and longevity from citation histories.
- That log-normal survival term is split out as [lognormal citation survival function](../methods/lognormal_citation_survival_function.md).
- Wang et al. show that varying the three parameters can reproduce observed citation histories ranging from jump-decay patterns to delayed impact.
- The paper distinguishes longevity from ultimate impact: ultimate citations depend on relative fitness, while impact timing is mainly governed by immediacy.

## Caveats

- Longevity is model-dependent and can be distorted by field growth, database changes, or citation-index coverage.
- Long-lived citation attention is not necessarily positive use or scientific importance.
- Exogenous shocks, rediscovery, or field emergence can create trajectories that simple decay parameters do not explain.

## Links

- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [lognormal citation survival function](../methods/lognormal_citation_survival_function.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [citation life-cycle half-life](citation_life_cycle_half_life.md)
- [ultimate citation impact](ultimate_citation_impact.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `citation_longevity_parameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation longevity; citation decay parameter; sigma parameter; citation survival width
