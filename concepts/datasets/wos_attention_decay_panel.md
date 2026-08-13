# WoS attention-decay panel

## Summary

The WoS attention-decay panel is a large Web of Science citation-history corpus used to study how quickly papers reach peak attention and then lose citation attention across broad scientific fields.

## Canonical Form

- Unit of analysis: English articles and reviews indexed in Thomson Reuters Web of Science through 2010.
- Typical representation: paper-level annual citation trajectories, publication year, journal subject category, broad field assignment, and total-citation percentile group.
- Scope: Clinical Medicine, Molecular Biology, Chemistry, and Physics, built by aggregating Thomson Reuters subject categories.
- Measurement target: field- and cohort-dependent citation life cycles, including peak timing, decay shape, and attention half-life.

## Uses in Science of Science

- Supplies the data substrate for [time-to-peak attention](../measures/time_to_peak_attention.md), [paper attention half-life](../measures/paper_attention_half_life.md), [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md), and [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md).
- Links [Web of Science](web_of_science.md) citation histories to [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Supports field-comparative estimates of [citation decay model comparison](../methods/citation_decay_model_comparison.md) and [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md).
- Provides a broad-field publication-volume series for testing [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md).
- Supports robustness and denominator checks now split out as [peak-year citation alignment](../methods/peak_year_citation_alignment.md), [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md), [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md), [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md), and [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md).
- Adds residual attention-economy and trajectory-shape motifs: [scientific attention economy](../mechanisms/scientific_attention_economy.md), [reference-age attention diversion](../mechanisms/reference_age_attention_diversion.md), [early-late citation-attention crossover](../representations/early_late_citation_attention_crossover.md), and [citation-decay source-method contingency](../validations/citation_decay_source_method_contingency.md).

## Operationalization

- Start from all English articles and reviews in Web of Science up to the end of 2010.
- Extract publication year, journal subject category, and annual citations to each publication.
- Map journal subject categories into four broad fields: Clinical Medicine, Molecular Biology, Chemistry, and Physics.
- Select high-citation papers by total-citation percentile, mainly the top 10%, with [11-30]% papers used as a lower-citation robustness set.
- Normalize each annual citation trajectory by the paper's maximum annual citation count before comparing post-peak decay.
- Align post-peak decay by peak year when testing functional forms.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) states that the corpus contains English Web of Science articles and reviews through 2010, with publication year, subject category, and citation records extracted for each paper.
- The paper divides annual citations by each paper's peak annual citation count before comparing citation life-cycle shapes.
- The paper reports field-scale sample sizes of 10,833,626 Clinical Medicine papers, 2,849,144 Molecular Biology papers, 4,565,197 Chemistry papers, and 5,583,183 Physics papers.
- Most analyses use top-decile papers by total citations to keep older cohorts large enough and annual citation counts statistically usable.
- Parolo et al. exclude papers peaking after 2005 from trend estimates when their peak years may still change.
- The appendix repeats key plots for the [11-30]% citation-percentile group and finds qualitatively similar citation-life-cycle patterns with lower post-peak plateaus.
- This lower-citation check is split out as [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md).
- The authors verify field construction by listing the Thomson Reuters subject categories aggregated into each broad field.
- A residual Parolo et al. pass separates attention-economy framing, reference-age diversion, early-late cohort crossover, and source-method contingency from the broader panel and model-comparison pages.

## Caveats

- The four broad fields are coarse and can mix topic-specific literatures with different true attention pools.
- Restricting most analyses to highly cited papers improves statistical stability but does not describe the whole citation distribution.
- Web of Science coverage, document-type filtering, English-language restriction, and citation-census timing should be treated as explicit design choices.

## Links

- [Web of Science](web_of_science.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md)
- [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md)
- [top-decile trajectory stability filter](../methods/top_decile_trajectory_stability_filter.md)
- [field publication-growth rate delta](../measures/field_publication_growth_rate_delta.md)
- [ultrametric event-distance representation](../representations/ultrametric_event_distance_representation.md)
- [digital discovery processing-capacity limit](../validations/digital_discovery_processing_capacity_limit.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [scientific attention economy](../mechanisms/scientific_attention_economy.md)
- [reference-age attention diversion](../mechanisms/reference_age_attention_diversion.md)
- [early-late citation-attention crossover](../representations/early_late_citation_attention_crossover.md)
- [citation-decay source-method contingency](../validations/citation_decay_source_method_contingency.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `wos_attention_decay_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: Web of Science attention decay corpus; four-field citation life-cycle panel; WoS citation aging panel; TR WoS attention panel
