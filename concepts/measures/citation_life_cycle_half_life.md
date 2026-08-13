# Citation life-cycle half-life

## Summary

Citation life-cycle half-life measures how long a paper continues receiving citations after its peak annual citation rate has begun to decay.

## Canonical Form

- Unit of analysis: paper, citation trajectory, field cohort, citation-impact quintile, or author portfolio rank set.
- Typical representation: tau_1/2, the publication age at which annual citation rate falls to half of its peak value on the decay side.
- Measurement target: duration and obsolescence of a paper's citation attention.
- Empirical signature: fields and papers differ in whether citation attention decays quickly, persists for decades, or receives delayed secondary attention.

## Uses in Science of Science

- Gives a direct half-life measure for [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Complements model-based [citation longevity parameter](citation_longevity_parameter.md) and [citation immediacy parameter](citation_immediacy_parameter.md).
- Provides empirical benchmarks for [citation trajectory models](../methods/citation_trajectory_models.md) and [reputation Monte Carlo career models](../methods/reputation_monte_carlo_career_model.md).
- Helps separate short-lived attention from durable influence in [citation impact indicators](citation_impact_indicators.md).
- Can be converted into [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md) when the question is whether apparent aging reflects field growth.

## Operationalization

- Compute annual citation increments for each paper by publication age or by age since first citation.
- Normalize each trajectory by its peak annual citation increment when comparing across papers.
- Identify the post-peak decay age at which the normalized annual citation rate reaches one half.
- Aggregate by field, citation-impact quintile, author portfolio rank group, or paper type.
- Report how delayed peaks, uncited years, and incomplete observation windows are handled.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) analyzes citation trajectories at both discipline-level quintiles and within-author rank-ordered publication sets.
- The paper defines tau_1/2 as the time to reach half of the peak citation rate during the decay phase.
- Petersen et al. report that citation life cycles often peak before about five years but vary substantially by field and paper impact.
- The paper finds that top mathematics and physics publications can have very long half-lives, while highly cited cell biology papers have shorter decay timescales.
- Petersen et al. relate the half-life to total citations with an approximate scaling relation, using field differences to interpret knowledge diffusion and obsolescence.
- Verified full-text evidence from Parolo et al. (2015) defines a paper attention half-life as the last year when normalized annual citations remain at least one half of the paper's peak annual citation rate.
- Parolo et al. report that this absolute-time half-life decreases linearly for Clinical Medicine, Molecular Biology, Chemistry, and Physics, consistent with faster fitted citation-decay rates.
- The paper then converts half-life from years into field publication counts, yielding a [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md) that is relatively stable over time.

## Caveats

- Half-life estimates require mature citation histories and can be right-censored for recent papers.
- Delayed recognition, rediscovery, or controversy can produce multiple peaks that complicate a single half-life.
- Field-level publication growth and database coverage can change apparent decay rates.

## Links

- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [paper fitness](paper_fitness.md)
- [citation impact indicators](citation_impact_indicators.md)
- [paper attention half-life](paper_attention_half_life.md)
- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [time-to-peak attention](time_to_peak_attention.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]
- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_life_cycle_half_life`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: citation half-life; impact life-cycle half-life; tau half-life; post-peak citation decay time
