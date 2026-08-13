# Incumbent-edge turnover model boundary

## Summary

Incumbent-edge turnover model boundary is the caveat that pure new-node attachment models may miss networks where established nodes add, remove, or rewire edges among themselves.

## Canonical Form

- Unit of analysis: incumbent node, edge addition, edge deletion, rewiring event, or growth model.
- Typical representation: model boundary around growth processes limited to new-node attachment.
- Validation target: identify when scale-free growth assumptions are incomplete for evolving networks.
- Empirical signature: established nodes continue changing their ties after entering the network.

## Uses in Science of Science

- Qualifies [network growth](../mechanisms/network_growth.md) models.
- Adds a boundary to [growth-attachment null models](growth_attachment_null_models.md).
- Connects to [fixed-node attachment saturation baseline](fixed_node_attachment_saturation_baseline.md), where node growth is not the only process.
- Helps interpret scholarly networks where authors, journals, institutions, or fields can rewire over time.

## Operationalization

- Track whether edges are only created by new nodes or also among incumbents.
- Estimate edge addition, deletion, and rewiring rates for existing nodes.
- Compare pure growth-attachment models with models that include turnover.
- Treat attachment-only predictions as incomplete when incumbent turnover is substantial.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) notes that real systems can include links added or removed among already existing vertices.
- The paper frames its model as a simplified growth and preferential-attachment mechanism.
- This boundary is useful when applying scale-free growth models to scholarly networks with evolving ties.

## Caveats

- Edge turnover can be difficult to observe in cumulative citation networks.
- Some scholarly graphs accumulate edges by design, while others such as collaboration networks can decay or change.
- Adding turnover can improve realism while making analytic derivation harder.

## Links

- [network growth](../mechanisms/network_growth.md)
- [growth-attachment null models](growth_attachment_null_models.md)
- [fixed-node attachment saturation baseline](fixed_node_attachment_saturation_baseline.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264]

## Metadata

- Concept ID: `incumbent_edge_turnover_model_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: incumbent edge turnover caveat; rewiring growth-model boundary; existing-node edge change boundary; attachment-only model caveat
