# Journal self-citation rate

## Summary

Journal self-citation rate measures how much a journal's citation traffic comes from the same journal, usually to audit editorial insularity, field closure, or impact-indicator sensitivity.

## Canonical Form

- Unit of analysis: journal, journal-year, citing-cited journal pair, field, or citation window.
- Typical representation: share of a journal's received or outgoing citations involving the same journal.
- Measurement target: self-referential concentration in journal citation flows.
- Empirical signature: unusually high within-journal citation share relative to field peers, journal age, size, and specialty structure.

## Uses in Science of Science

- Adds a journal-level variant to broader [self-citation rates](self_citation_rates.md).
- Provides a diagnostic input for [citation metric gaming](../validations/citation_metric_gaming.md) and [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md).
- Connects [journal citation network mapping](../representations/journal_citation_network_mapping.md) to editorial-policy analysis.
- Helps distinguish legitimate specialty cohesion from parochial or strategically induced citation behavior.

## Operationalization

- Build a journal-to-journal citation matrix over a declared source set and citation window.
- Count citations from a journal to itself and divide by all citations received, all outgoing references, or another declared denominator.
- Compare with field peers and with external citation concentration.
- Inspect whether self-citations fall inside impact-indicator windows or concentrate in particular article types.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) identifies the extent of self-citation as one of the objective indicators editors could use to evaluate a journal's performance.
- Garfield lists high self-citation rate as an unanswered research question and asks whether it signals parochialism, eccentricity, mediocrity, or a field with little basis for external interaction.
- The same text situates self-citation alongside yearly citation counts and the distribution of citations within and outside the specialty literature.
- Verified full-text evidence from West et al. (2010) turns this diagnostic into a preprocessing rule for Eigenfactor metrics by excluding journal self-citations to reduce gaming incentives.

## Caveats

- High journal self-citation can reflect legitimate specialty coherence, standards literature, or field isolation rather than manipulation.
- Received-self-citation and outgoing-self-citation denominators answer different questions.
- The metric should be interpreted with journal size, field density, citation window, and editorial policy context.

## Links

- [self-citation rates](self_citation_rates.md)
- [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md)
- [IFBSCP threshold-exceedance share](ifbscp_threshold_exceedance_share.md)
- [legitimate recent self-citation mechanisms](../mechanisms/legitimate_recent_self_citation_mechanisms.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [journal impact factor](journal_impact_factor.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `journal_self_citation_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal self-citation share; within-journal citation rate; same-journal citation share; journal self-reference rate
