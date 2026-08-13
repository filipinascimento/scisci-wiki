# Retraction cascades

## Summary

Retraction cascades occur when detection of one invalid paper triggers investigation and retraction of additional papers from the same author group, laboratory, dataset, or research line.

## Canonical Form

- Unit of analysis: author group, laboratory, paper cluster, investigation, journal, field, or retraction sequence.
- Typical representation: event sequence, author-paper network, repeated-retraction cluster, or investigation-triggered cascade.
- Mechanism or measurement target: clustered correction after a misconduct or error signal reveals related problems.
- Empirical signature: several retractions appear close in time after an investigation, often sharing authors or provenance.

## Uses in Science of Science

- Explains why retractions are concentrated among some author groups rather than independent events.
- Links [time-to-retraction](../measures/time_to_retraction.md) to detection: one exposed case can lead editors or institutions to revisit older outputs.
- Helps distinguish field-wide quality problems from concentrated serial misconduct or systematic laboratory failures.
- Supports network-based audits of retracted-paper clusters.

## Operationalization

- Build author-paper-retraction networks with publication and retraction dates.
- Detect clusters of retracted papers sharing authors, laboratories, institutions, datasets, or investigation reports.
- Identify cascade timing: first detected paper, subsequent investigations, and later retractions.
- Separate cascade-driven repeated retractions from independent single-paper corrections.
- Summarize repeated-case concentration with [author-group retraction concentration](../measures/author_group_retraction_concentration.md).

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) reports that 38 research groups with five or more retractions accounted for 43.9% of fraud or suspected-fraud retractions in the modern biomedical literature.
- Fang et al. note that nearly all retracted papers by authors with 10 or more retractions were retracted because of fraud.
- The paper describes how discovery of one fraudulent paper can trigger systematic review of an author's broader output, producing a cascade of retractions.
- Fang et al. use the Mori case as an example: the retraction of one 2010 Blood article was followed by the retraction of 30 additional articles from the same laboratory.

## Caveats

- A repeated-retraction cluster should not be interpreted without investigation context.
- Coauthorship can expose innocent collaborators to repeated-retraction counts.
- Cascades can inflate time-to-retraction averages because older papers are retracted only after a later trigger.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [author-group retraction concentration](../measures/author_group_retraction_concentration.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `retraction_cascades`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Aliases: serial retractions; repeated-retraction clusters; investigation-triggered retractions; author-group retraction cascades
