# MeSH keyword trajectory shift

## Summary

MeSH keyword trajectory shift measures whether a biomedical scientist's publication keywords become newer or less overlapping with their prior keyword portfolio after an event such as a funding appointment.

## Canonical Form

- Unit of analysis: scientist, publication, MeSH descriptor, keyword pair, pre-event period, or post-event period.
- Typical representation: average MeSH keyword age, keyword-pair age, and normalized pre/post keyword overlap.
- Measurement target: research-topic novelty and directional change in a biomedical career.
- Empirical signature: lower keyword age and lower pre/post overlap indicate movement toward newer or different research topics.

## Uses in Science of Science

- Provides a content-side measure for [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md).
- Complements outcome-side measures such as [vintage-specific citation-tail output](vintage_specific_citation_tail_output.md) and [self-benchmark hit/flop rates](self_benchmark_hit_flop_rates.md).
- Offers a biomedical controlled-vocabulary alternative to embedding-based [career topic/style entropy](career_topic_style_entropy.md).
- Helps distinguish actual topic exploration from purely citation-status effects.

## Operationalization

- Map publications to MeSH descriptors or descriptor pairs.
- Define keyword birth year as the first year a descriptor appears in the PubMed-indexed corpus.
- Compute average keyword age for each scientist-year or period.
- Compute normalized overlap between pre-event and post-event keyword sets, usually dividing overlap by post-event keyword count.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) uses MeSH keywords to measure the direction of research after HHMI appointment.
- The paper defines keyword birth as the first year a term appears in any PubMed-indexed paper and uses average keyword age as a topic-novelty measure.
- Azoulay et al. also compute normalized overlap between keywords used before and after appointment and report lower overlap for HHMI investigators than controls.
- Table 8 reports negative treatment effects on average MeSH keyword age and normalized MeSH keyword overlap, consistent with newer and shifted research directions.

## Caveats

- MeSH is biomedical and does not transfer directly to all fields.
- Controlled-vocabulary updates can create artificial keyword birth and age patterns.
- Lower overlap can reflect field drift, lab growth, or collaborations rather than deliberate exploration.

## Links

- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [career topic/style entropy](career_topic_style_entropy.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic models](../methods/topic_models.md)
- [citing-journal diversity index](citing_journal_diversity_index.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `mesh_keyword_trajectory_shift`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: MeSH keyword age; normalized MeSH keyword overlap; biomedical topic shift; MeSH novelty trajectory
