# Field publication-growth rate delta

## Summary

Field publication-growth rate delta is the exponential growth parameter used to quantify how quickly a field's publication volume expands over time.

## Canonical Form

- Unit of analysis: field, publication year, corpus, or document-type filtered publication count.
- Typical measure: `N_p(t) = N_0 exp(delta t)`, where `delta` is the field growth rate.
- Measurement target: growth pressure on attention allocation, citation competition, and literature search.
- Empirical signature: larger delta values correspond to faster expansion of the publication pool.

## Uses in Science of Science

- Parameterizes [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md).
- Supports [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md).
- Helps interpret changes in [time-to-peak attention](time_to_peak_attention.md) and [paper attention half-life](paper_attention_half_life.md).
- Connects citation aging to field population growth.

## Operationalization

- Count publications by field and year using a stable corpus definition.
- Fit an exponential model to the publication-count series over the target window.
- Use the estimated `delta` to rescale citation half-life or compare fields with different growth rates.
- Report subject-category mapping, document-type filters, and census year.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) fits field publication growth with an exponential form and reports field-specific growth rates.
- The paper uses these rates to test whether faster citation-attention decay can be explained by the growth of the literature itself.
- Growth-rate adjustment changes interpretation of attention half-life by separating absolute time decay from volume-normalized decay.

## Caveats

- Exponential growth can be a local approximation and may fail during saturation, database expansion, or field reclassification.
- Field boundaries and Web of Science subject-category aggregation affect delta.
- Publication growth is only one source of attention competition.

## Links

- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [time-to-peak attention](time_to_peak_attention.md)
- [paper attention half-life](paper_attention_half_life.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `field_publication_growth_rate_delta`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: publication growth delta; field output growth rate; exponential publication-growth parameter
